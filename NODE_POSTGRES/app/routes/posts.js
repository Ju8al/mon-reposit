const pool = require("../db/queries");

const getPostByUserId = (request, response) => {
    const userid = parseInt(request.params.userid)

    pool.query(`SELECT * FROM posts WHERE userid = ${userid}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getPosts = (request, response) => {
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createPost = (request, response) => {
    const { userid, title, body } = request.body

    pool.query(`INSERT INTO posts ( userid, title, body ) VALUES ('${userid}', '${title}', '${body}')`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Post added with ID: ${results.insertId}`)
    })
};

const getPostById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query(`SELECT * FROM posts WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const updatePost = (request, response) => {
    const id = parseInt(request.params.id)
    const { userid, title, body } = request.body

    pool.query(
        `UPDATE posts SET userid = '${userid}', title = '${title}', body = '${body}' WHERE id = ${id}`,
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Post modified with ID: ${id}`)
        }
    )
};

const deletePost = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query(`DELETE FROM posts WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

module.exports = {
    getPostByUserId,
    getPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost
};