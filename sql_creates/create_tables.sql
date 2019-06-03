DROP TABLE class_topics;
DROP TABLE topic_rankings;

CREATE TABLE class_topics (
    id SERIAL PRIMARY KEY,
    topic_name VARCHAR
);

CREATE TABLE topic_rankings (
    id SERIAL PRIMARY KEY,
    ranking INT
);

INSERT INTO class_topics 
    (topic_name) 
VALUES     
    ('HTML'),
    ('CSS'),
    ('Javascript'),
    ('PostgreSQL'),
    ('Node'),
    ('Express');