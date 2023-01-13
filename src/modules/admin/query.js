
const GETLOGIN = `
select a.* from admins as a 
where adminname = $1 and password = crypt($2,a.password) 
`
const GETREGISTER = `
insert into admins(adminname,password)
values ($1,crypt($2,gen_salt('bf'))) returning *
`

const PUTADMIN = `
update admins SET password = crypt($1,gen_salt('bf')) 
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
    GETDELETE
}