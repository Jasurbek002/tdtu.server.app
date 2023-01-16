const GETDATA = `
select * from news
`

const POSTDATA = `
insert into news(image,title_uz,title_en,text_uz,text_en)
values($1,$2,$3,$4,$5) returning *
`

const OLDDATA =`
select * from news where new_id = $1
`

const PUTDATA = `
update news SET 
image = $1 ,
title_uz = $2,
title_en = $3,
text_uz = $4,
text_en = $5
where new_id = $6
returning *
`
const DELETEDATA = `
delete from news where new_id = $1
returning *
`


module.exports = {
    GETDATA,
    POSTDATA,
    OLDDATA,
    PUTDATA,
    DELETEDATA
}