DROP TABLE IF EXISTS entry;

CREATE TABLE entry (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(500) NOT NULL,
    category VARCHAR(30) NOT NULL,
    date date,
    time time,
    PRIMARY KEY (entry_id)
);

INSERT INTO entry
    (text, category, date, time)
VALUES
    ('Hello!', 'message', 2023-10-05, 14:30:00),