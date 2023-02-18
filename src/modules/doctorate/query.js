const GETDATA = `
select * from docs`
const POSTDATA = `
insert into docs(full_name,special,job) 
values($1,$2,$3) returning *`
const PUTDATA = `
update docs set 
full_name = $1,
special = $2,
job = $3
where doc_id = $4
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