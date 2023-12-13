
const GETDATA =`
SELECT * from banners
`

const GETONEDATA = `
SELECT * from banners where banner_id = $1
`

const POSTDATA = `
insert into banners(image,title_uz,title_en,text_uz,text_en) 
values($1,$2,$3,$4,$5) returning *
`

const PUTDATA = `
update banners SET  image = $2
 where banner_id = $1 returning *
`

const DELETEDATA = `
DELETE FROM banners 
where banner_id = $1 returning *
`

module.exports = {
    GETDATA,
    POSTDATA,
    PUTDATA,
    DELETEDATA,
    GETONEDATA
}