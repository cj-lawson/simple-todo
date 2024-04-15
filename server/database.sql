CREATE DATABASE nodetodo;


CREATE TABLE users(
    user_id UUID PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
);

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    user_id UUID,
    description VARCHAR(255),
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Insert fake users

INSERT INTO users(user_name, user_email, user_password) VALUES('spicyBeefPho', 'lawsoncj3@gmail.com', 'dietcoke96');

-- fake todo data
INSERT INTO todo(user_id, description) VALUES('7e5bc6fb-b2db-47d5-84ee-cec3a1eacf88', 'Take Andy for a walk')

-- join data 
select * from users INNER JOIN todo ON users.user_id = todo.user_id

-- join data even if empty 
select * from users LEFT JOIN todo ON users.user_id = todo.user_id