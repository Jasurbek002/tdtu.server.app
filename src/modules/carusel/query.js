
const GETDATA =`
SELECT * from banners
`

const POSTDATA = `
insert into banners(image) 
values($1) returning *
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
    DELETEDATA
}