-- create tables
create table if not exists mydb.sports
(
    id int auto_increment not null primary key,
    name varchar(50) not null,
    status boolean not null default true,
    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp
);

create table if not exists mydb.tours
(
    id int auto_increment not null primary key,
    name varchar(50) not null,
    sportId int not null,
    status boolean not null default true,
    startTime timestamp not null,
    endTime timestamp not null,
    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp,
    foreign key (sportId) references sports(id)
);

create table if not exists mydb.matches
(
    id int auto_increment not null primary key,
    name varchar(50) not null,
    tourId int not null,
    status boolean not null default true,
    format varchar(50) not null,
    startTime timestamp not null,
    endTime timestamp not null,
    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp,
    foreign key (tourId) references tours(id)
);


create table if not exists mydb.news
(
    id int auto_increment not null primary key,
    title varchar(50) not null,
    description varchar(255),
    sportId int not null,
    tourId int not null,
    matchId int not null,
    createdAt timestamp not null default current_timestamp,
    foreign key (sportId) references sports(id),
    foreign key (tourId) references tours(id),
    foreign key (matchId) references matches(id)
);

-- seed data
insert ignore into mydb.sports (id, name) values (1, 'Cricket');
insert ignore into mydb.sports (id, name) values (2, 'Football');

insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (1, 'Indian Premier League, 2023', 1, '2023-04-09 00:00:00', '2023-05-30 00:00:00');
insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (2, 'India Super League, 2023', 2, '2023-04-21 00:00:00', '2023-06-20 00:00:00');
insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (3, 'India Tour of West Indies, 2023', 1, '2023-06-10 00:00:00', '2023-06-29 00:00:00');
insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (4, 'English Premier League, 2022', 2, '2022-04-09 00:00:00', '2022-05-30 00:00:00');

insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('GT vs RCB', 1, 'T20', '2023-04-09 18:00:00', '2023-04-09 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('CSK vs MI', 1, 'T20', '2023-04-10 18:00:00', '2021-04-10 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('LSG vs KXIP', 1, 'T20', '2023-04-11 18:00:00', '2023-04-11 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('RR vs SRH', 1, 'T20', '2023-04-12 18:00:00', '2023-04-12 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('BLR vs BEN', 2, 'soccer', '2023-04-29 18:00:00', '2023-04-29 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('ATK vs MCFC', 2, 'soccer', '2023-04-21 18:00:00', '2023-04-21 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('KER vs JFC', 2, 'soccer', '2023-04-22 18:00:00', '2023-04-22 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('IND vs WI', 3, 'ODI', '2023-06-10 10:00:00', '2023-06-10 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('IND vs WI', 3, 'ODI', '2023-06-12 10:00:00', '2023-06-12 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('IND vs WI', 3, 'ODI', '2023-06-14 10:00:00', '2023-06-14 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('KER vs JFC', 4, 'soccer', '2022-04-09 18:00:00', '2022-04-09 23:00:00');


insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('Indian Premier League (IPL) 2023', 'Indian Premier League, 2023, GT vs RCB match on 09th April 2023 6pm onwards', 1, 1, 1);
insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('Indian Premier League (IPL) 2023', 'Indian Premier League, 2023 CSK vs MI match on 10th April 2023 6pm onwards', 1, 1, 2);
insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('Indian Premier League (IPL) 2023', 'Indian Premier League, 2023 LSG vs KXIP match on 11th April 2023 6pm onwards', 1, 1, 3);
insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('Indian Premier League (IPL) 2023', 'Indian Premier League, 2023 RR vs SRH match on 12th April 2023 6pm onwards', 1, 1, 4);
insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('Indian Super League (ISL) 2023', 'India Super League, 2023 BLR vs BEN match on 29th April 2023 6pm onwards', 2, 2, 5);
insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('Indian Super League (ISL) 2023', 'India Super League, 2023 ATK vs MCFC match on 21th April 2023 6pm onwards', 2, 2, 6);
insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('Indian Super League (ISL) 2023', 'India Super League, 2023 KER vs JFC match on 22th April 2023 6pm onwards', 2, 2, 7);
insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('India Tour of West Indies, 2023', 'India Tour of West Indies, 2023 IND vs WI match on 10th April 2023 10am onwards', 1, 3, 8);
insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('India Tour of West Indies, 2023', 'India Tour of West Indies, 2023 IND vs WI match on 12th April 2023 10am onwards', 1, 3, 9);
insert ignore into mydb.news (title, description, sportId, tourId, matchId) values ('English Premier League (EPL), 2022', 'English Premier League, 2022 KER vs JFC match on 04th September 2022 6pm onwards', 2, 4, 11);

-- Creating an index over name column for increasing the performance of /tour/matches Endpoint.
ALTER TABLE tours ADD INDEX idx_name (name);
