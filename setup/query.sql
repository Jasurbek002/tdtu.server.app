select * from brm b 
left join brm_info bi on bi.brm_id = b.brm_id
where b.brm_id = 2;