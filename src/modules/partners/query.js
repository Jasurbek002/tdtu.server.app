
const GETDATA =`
select * from partners
`

const POSTDATA = `
insert into partners(logo,link)
values($1,$2) returning *
`
const PUTDATA = `
update partners set logo = $1 , link = $2
where  partner_id = $3 returning *
`

const DELETEDATA = `
delete from partners where 
partner_id = $1 returning *
`

module.exports = {
    GETDATA,
    POSTDATA,
    PUTDATA,
    DELETEDATA
}