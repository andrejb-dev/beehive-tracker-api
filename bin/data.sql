INSERT INTO public.addresses(street, city, zip_code, gps_location)
	VALUES
    ('Slnečná 15', 'Košice', '04001', point(48.7172272,21.2496774)),
    ('Na poli niekde', 'Trnava', '91701', point(48.3731582,17.5813757)),
    ('Za domom', 'Nové Mesto nad Váhom', '91501', point(48.7555486,17.8103031)),
    ('U suseda', 'Šaľa', '92701', point(48.1354417,17.8917963));

INSERT INTO public.environment_types(key)
	VALUES ('urban'), ('agricultural'),	('natural');

INSERT INTO public.users(name, born, email, address_id)
    VALUES
    ('joseph123', '1990-03-15', 'joseph123@test.test', 1),
    ('peter555', '1992-04-15', 'peter555@test.test', 2),
    ('johnsnow', '1994-05-15', 'johnsnow@test.test', 3),
    ('frodo-from-fellowship', '1996-06-15', 'frodo-from-fellowship@test.test', 4);

INSERT INTO public.yards(user_id, address_id)
	VALUES (1,1), (1,2), (1,3), (2,4);

INSERT INTO public.yard_environments(
	yard_id, environment_key)
	VALUES
    (1, 'urban'),
	(1, 'agricultural'),
	(1, 'natural'),
	(2, 'urban'),
	(3, 'natural'),
    (4, 'natural');

INSERT INTO public.hives(yard_id, active, note)
	VALUES
    (1, 't', 'first hive'),
    (1, 't', 'first  sdfsdfs hive'),
    (1, 'f', 'first hivesdfsdfsdfsdf first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf '),
    (2, 't', 'first hi sdfsdfsdfve'),
    (2, 't', 'first hive sdfsdfsdfsdfsdfsdfsdff sd s sd sd s sd sd sd sfsf ffffffffffffffffffffff f f ffffffffffff'),
    (3, 't', 'first hive vsfgsfg first hive sdsdfsdf first hive sdsdfsdf '),
    (4, 't', 'first hive dfgdgdfgdfg first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf '),
    (1, 't', 'first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf first hive sdsdfsdf ');

INSERT INTO public.product_types(key)
	VALUES ('pollen'), ('honey'), ('wax'), ('honey_rounds'), ('propolis');
    
INSERT INTO public.unit_types(key)
	VALUES ('mg'), ('g'), ('kg'), ('ml'), ('l'), ('pcs');

INSERT INTO public.harvests(hive_id, product_key, quantity, unit_code, note)
	VALUES
    (1, 'pollen', 2, 'kg', 'best harvest ever best harvest ever best harvest ever best harvest ever best harvest ever '),
    (1, 'wax', 1500, 'mg', 'best harvest ever best harvest ever best harvest ever best harvest ever best harvest ever '),
    (1, 'honey', 10, 'ml', 'best harvest ever best harvest ever best harvest ever best harvest ever best harvest ever '),
    (2, 'honey', 2, 'l', 'best harvest ever best harvest ever best harvest ever best harvest ever best harvest ever '),
    (2, 'honey_rounds', 10, 'pcs', 'best harvest ever best harvest ever best harvest ever best harvest ever best harvest ever ');