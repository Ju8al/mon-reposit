const pool = require("../db/queries");

const getCommentByPostId = (request, response) => {
    const postid = parseInt(request.params.postid)

    pool.query(`SELECT * FROM comments WHERE postid = ${postid}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getComments = (request, response) => {
    pool.query('SELECT * FROM comments ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createComment = (request, response) => {
    const { postid, name, email, body } = request.body

    pool.query(`INSERT INTO comments (postid, name, email, body) VALUES ('${postid}', '${name}', '${email}', '${body}')`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Comment added with ID: ${results.insertId}`)
    })
};

const getCommentById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query(`SELECT * FROM comments WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const updateComment = (request, response) => {
    const id = parseInt(request.params.id)
    const { postid, name, email, body } = request.body

    pool.query(
        `UPDATE comments SET postid = '${postid}', name = '${name}', email = '${email}', body = '${body}' WHERE id = ${id}`,
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Comment modified with ID: ${id}`)
        }
    )
};

const deleteComment = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query(`DELETE FROM comments WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

module.exports = {
    getCommentByPostId,
    getComments,
    createComment,
    getCommentById,
    updateComment,
    deleteComment
};

