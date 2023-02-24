const GETDATA = `select i.*,p.* from inno as i
left join innoimg as p on i.inno_id = p.inno_id
`
const POSTDATA = `insert into inno(title) values($1) returning *`
const POSTIMG = `insert into innoimg(img,inno_id) values($1,$2) returning *`
const DELETEDATA = `update inno set status = 'passive' where inno_id = $1 returning *`
module.exports ={GETDATA,POSTDATA,POSTIMG,DELETEDATA}