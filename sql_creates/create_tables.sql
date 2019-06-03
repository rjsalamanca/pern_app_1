DROP TABLE class_topics;
DROP TABLE topic_rankings;

CREATE TABLE class_topics (
    id SERIAL PRIMARY KEY,
    topic_name VARCHAR,
    self_score INT
);

INSERT INTO class_topics 
    (topic_name,self_score) 
VALUES     
    ('HTML',1),
    ('CSS',1),
    ('Javascript',1),
    ('PostgreSQL',1),
    ('Node',1),
    ('Express',1);

CREATE TABLE topic_rankings (
    id SERIAL PRIMARY KEY,
    ranking VARCHAR
);

INSERT INTO topic_rankings 
    (ranking) 
VALUES
    ('Unranked'),
    ('Poor'),
    ('Okay'),
    ('Good'),
    ('Great'),
    ('Awesome');