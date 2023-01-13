insert into admins(adminname,password,status) 
values ('jasur',crypt('tdtumex',gen_salt('bf')),'supperAdmin');


update banners SET  image = 'banner-1673433395896-646917292.jpg'
 where banner_id = 3 returning *