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
 

 insert into loyha(thema_uz,thema_en,author_uz,dedline,tip) 
 values ('Suniy intetlekt','Ai inteligent','jasdev','10.20.2024','international');


 insert into rooms(name_uz,name_en,name_ru) values
 ('Tadqiqot energiyasi va laboratoriyasi','Research Energy and Laboratory','Исследовательская энергия и лаборатория'),
 ('Energiya auditi laboratoriyasi','Energy audit laboratory','Лаборатория энергоаудита'),
 ('Robototexnika va Nazarat-Ulchov laboratoriyalari','Robotics and Observation-Measurement laboratories','Лаборатории робототехники и наблюдения-измерения'),
 ('Avtomatlashtirilgan tizimlarni boshkarish','Management of automated systems','Управление автоматизированными системами'),
 ('Muqobil energiya manbalari laboratoriyasi','Laboratory of alternative energy sources','Лаборатория альтернативных источников энергии'),
 ('Materiallarni kompleks tahlil qilish laboratoriyasi','Laboratory of complex analysis of materials','Лаборатория комплексного анализа материалов'),
 ('Fizik-kimyoviy xususyatlar modifikatsasi','Modification of physical and chemical properties','Изменение физических и химических свойств'),
 ('Issiqlik-ommaviy almashinuvi laboratoriyasi','Laboratory of heat-mass exchange','Лаборатория тепломассообмена');

 insert into loboratory(
    
 )