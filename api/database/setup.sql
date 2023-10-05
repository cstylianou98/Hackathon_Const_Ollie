DROP TABLE IF EXISTS entry;

CREATE TABLE entry (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(500) NOT NULL,
    category VARCHAR(30) NOT NULL,
    date DATE NOT NULL, --different type?
    time TIME NOT NULL,
    PRIMARY KEY (entry_id)
);

INSERT INTO entry
    (text, category, date, time)
VALUES
    ('Hello!', 'message', '2023-09-05', '14:30:00');