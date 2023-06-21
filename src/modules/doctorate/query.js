const GETDATA = `
select * from docs`
const POSTDATA = `
insert into docs(full_name,special,job,type) 
values($1,$2,$3,$4) returning *`
const PUTDATA = `
update docs set 
full_name = $1,
special = $2,
job = $3,
type = $4
where doc_id = $5
returning *`
const DELETEDATA = `delete from docs where doc_id = $1 returning *`
const OLDDATA = `select * from docs where doc_id = $1`
module.exports = {
    GETDATA,
    POSTDATA,
    PUTDATA,
    DELETEDATA,
    OLDDATA
}