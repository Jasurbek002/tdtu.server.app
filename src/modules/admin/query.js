
const GET_ADMINS =  `
select * from admins
`

const GETLOGIN = `
select a.* from admins as a 
where adminname = $1 and password = $2
`
const GETREGISTER = `
insert into admins(adminname,password,status,role)
values ($1,$2,$3,$4) returning *
`

const PUTADMIN = `
update admins SET password = $1 
where admin_id = $2 returning *
`

const GETDELETE = `
delete from admins where
admin_id = $1 returning *
`
module.exports = {
    GETLOGIN,
    GETREGISTER,
    PUTADMIN,
    GETDELETE,
    GET_ADMINS
}