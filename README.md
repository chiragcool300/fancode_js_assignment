# js-assignment

How we resolved the problems -
1. Solution for P1 : **For this problem we had made an index over the 'name' column in tours table, and restructured the SQL query to use subquery instead of JOINS**.

   Changed SQL query looks like:

       SELECT * FROM matches left join tours on matches.tourId = tours.id WHERE tours.name = ?;
       SELECT * FROM matches WHERE tourId IN (SELECT id FROM tours WHERE name = ?);

3. Solution for P2 : We are now fetching match's id, startTime and format as well from the matches table.
4. Solution for P3 : We had created news route, model and controller. Also had created news table.


Important Points :
1. We had made a github repository with respective commits for problem 1,2 and 3.
2. Please refer to base.sql file for the index we had made for problem - 1 and for the news table structure.
3. Please refer these commits for understanding the changes we are doing to solve the problems.
4. News endpoint will look like below -

   a. Fetch news by match ID:

       Endpoint: /news/match/{matchId}
       Example URL: /news/match/4

   b. Fetch news by tour ID:

       Endpoint: /news/tour/{tourId}
       Example URL: /news/tour/1

   c. Fetch news by sport ID:

       Endpoint: /news/sport/{sportId}
       Example URL: /news/sport/2