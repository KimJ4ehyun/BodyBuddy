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

insert into reviews (routine_id, user_id, nickname, content, date)
values ('1', 'jaehyun12', 'jaehyun', '너무 좋아요1', date_format(now(), '%Y%m%d'));

insert into reviews (routine_id, user_id, nickname, content, date)
values ('1', 'yelim123', 'yelim', '너무 좋아요2', date_format(now(), '%Y%m%d'));

insert into reviews (routine_id, user_id, nickname, content, date)
values ('2', 'jaehyun12', 'jaehyun', '최고1', date_format(now(), '%Y%m%d'));

insert into reviews (routine_id, user_id, nickname, content, date)
values ('2', 'yelim123', 'yelim', '최고2', date_format(now(), '%Y%m%d'));

-- delete from exercises where exercise_id=2;

insert into routines (user_id, routine_title, date, description)
values ('jaehyun12', 'woww', date_format(now(), '%Y%m%d'), '우와와아아아아ㅏ아ㅏ');

-- 다른 사람 루틴을 추가했을 때
insert into routines 
values (0, 'b');

insert into exercises (routine_id, exercise_name, exercise_part, setCnt, weight, repetitions, day_of_the_week, time)
	(select 2, a, b, g, c, d, e, f from (
		select exercise_name a, exercise_part b, setCnt g, weight c, repetitions d, day_of_the_week e, time f from exercises where routine_id=1
	));

select * from users;
select * from routines;				
select * from exercises;