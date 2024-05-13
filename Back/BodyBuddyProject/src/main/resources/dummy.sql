insert into users
values ('yelim123', 'yelim123', '예림', 'yelim', 'yelim12@nav.com');

insert into users
values ('jaehyun12', 'jaehyun12', '재현', 'jaehyun', 'jaehyun12@na.com');

insert into routines (user_id, routine_title, date, description)
values ('yelim123', 'good', 
		date_format(now(), '%Y%m%d'), 'gooooood');

insert into routines (user_id, routine_title, date, description)
values ('yelim123', 'hello', date_format(now(), '%Y%m%d'), 'hihihihihi');

insert into exercises (routine_id, exercise_name, exercise_part, 
					set_cnt, weight, repetitions, day_of_the_week, time)
values (1, '운동', '하체', '10', '100', '20', ('월,수'), '오전');



select * from routines;				
select * from exercises;