

const GETDATA = `
select * from economy
`

const POSTDATA = `
insert into economy(name_uz,name_en)
values($1,$2) returning *
`

const OLDDATA = `
select * from economy
where econom_id = $1
`

const PUTDATA = `
updated economy set
 name_uz = $1,
 name_en = $2
 where economy_id = $3 returning * 
`

const DELETEDATA = `
delete from economy where economy_id = $1
`

module.exports = {
    GETDATA,POSTDATA,OLDDATA,PUTDATA,DELETEDATA
}