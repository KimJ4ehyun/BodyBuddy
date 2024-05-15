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
values (1, '이름1', '하체', '10', '100', '20', ('월,수'), '오전');

insert into exercises (routine_id, exercise_name, exercise_part, 
					set_cnt, weight, repetitions, day_of_the_week, time)
values (1, '이름2', '상체', '10', '100', '20', ('목'), '저녁');

insert into exercises (routine_id, exercise_name, exercise_part, 
					set_cnt, weight, repetitions, day_of_the_week, time)
values (2, '이름3', '복부운동', '10', '100', '20', ('금'), '오후');

delete from exercises where exercise_id=2;

insert into routines (user_id, routine_title, date, description)
values ('jaehyun12', 'woww', date_format(now(), '%Y%m%d'), '우와와아아아아ㅏ아ㅏ');

select * from users;
select * from routines;				
select * from exercises;