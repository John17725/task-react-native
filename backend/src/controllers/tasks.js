import { connect } from '../database';

export const getTasks = async (req,res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks');
    res.json(rows);
}

export const getTask = async (req,res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ' + req.params.id);
    res.json(rows);
}

export const getTaskCount = async (req,res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM tasks');
    res.json(rows);
}

export const createTask = async (req,res) => {
    // console.log(req.body.title);
    const connection = await connect();
    const query = await connection.query("INSERT INTO tasks (title, description) VALUES ('"+req.body.title+"','"+req.body.description+"')");
    if(query){
        res.json('success create');
    }else{
        res.json('error');
    }
}

export const deleteTask = async (req,res) => {
    const connection = await connect();
    const [rows] = await connection.query('DELETE FROM tasks WHERE id = ' + req.params.id);
    console.log(rows);
    res.json('');
}

export const updateTask = async (req,res) => {
    const connection = await connect();
    const query = await connection.query("UPDATE tasks SET title = '"+req.body.title+"', description ='"+req.body.description+"' WHERE id = '"+req.params.id+"'");
    if(query){
        res.json('success update');
    }else{
        res.json('error');
    }
}