insert into admins(adminname,password,status) 
values ('jasur','tdtumex','supperAdmin');

insert into docs(full_name,special,job,type) 
values (
'Kamolov Ahmadjon Abduraximovich',
'01.04.04 - fizik Elektronika',
'Samarqand davalar arxitektura va qurulish inistituti dekan orinbosari',
'ds'
);

insert into news(image,title_uz,title_en,link)
values(
    ',nsidodjdposakxl;sa.jpg',
    'juda yaxshi yangilik',
    'very good news',
    'https://www.jasdev.uz'
);

update banners SET  image = 'banner-1673433395896-646917292.jpg'
 where banner_id = 3 returning *


 insert into economy(name_uz,name_en,department) values('juda yaxshi loyiha','very good project','Mexanika fakuliteti');