insert into admins(adminname,password,status,role) 
values ('jasur','tdtumex','supperAdmin',0);



insert into docs(full_name,special,job,type) 
values (
'Kamolov Ahmadjon Abduraximovich',
'01.04.04 - fizik Elektronika',
'Samarqand davalar arxitektura va qurulish inistituti dekan orinbosari',
'ds'
);


insert into news(image,title_uz,title_en,link)
values(
    'nsidodjdposakxl;sa.jpg',
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



 insert into brm(title_en,text_en)
 values('No poverty','There are many ways that your university can help achieve SDG 1. Here are a few ideas:'),
 ('Zero hunger','Tashkent State Technical University Zero Hunger Program'),
 ('Good health and well-being','Tashkent State Technical University Good Health and Well-Being Strategy'),
 ('Quality education','Tashkent State Technical University Quality Education Strategy'),
 ('Gender equality','Tashkent State Technical University Gender Equality Strategy'),
 ('Clean water and sanitation','Tashkent State Technical University Clean Water and Sanitation Strategy'),
 ('Affordable and clean energy','Decent jobs and economic growth'),
 ('Decent jobs and economic growth','Tashkent State Technical University Decent Jobs and Economic Growth Strategy'),
 ('Industrialization, innovation and infrastructure','Tashkent State Technical University Industrialization, Innovation, and Infrastructure Strategy'),
 ('Reducing inequality','Tashkent State Technical University Reducing Inequality Strategy'),
 ('Sustainable cities and communities','Tashkent State Technical University Sustainable Cities and Communities Strategy'),
 ('Responsible consumption and production','Tashkent State Technical University Responsible Consumption and Production Strategy'),
 ('Climate action','Here are some strategies that Tashkent State Technical University can implement to address climate change:'),
 ('Life below water','Here are some strategies that Tashkent State Technical University can implement to address the issue of life below water:'),
 ('Life on Land','Here are some strategies that Tashkent State Technical University can implement to address the issue of life on land:'),
 ('Peace , justice and strong institutions','Here are some strategies that Tashkent State Technical University can implement to address the issue of peace, justice, and strong institutions:'),
 ('Partnerships for the Goals','Here are some strategies that Tashkent State Technical University can implement to address the issue of partnerships for the goals:');

 insert into brm_info(brm_id,subtitle_en,subtext_en)
 values(1,'_','• Incorporate SDG 1 into your curriculum. You can do this by adding courses on poverty, inequality, and development to your curriculum. You can also integrate SDG 1 into existing courses, such as economics, sociology, and political science.'),
(1,'_','• Encourage your students to volunteer in their communities. There are many organizations in Uzbekistan that are working to fight poverty. Your students can volunteer their time to these organizations, or they can start their own projects to help those in need.'),
(2,'Program Goals:','• To provide food assistance to students and staff who are food insecure.• To educate the university community about hunger and food insecurity.• To advocate for policies that support zero hunger.');
