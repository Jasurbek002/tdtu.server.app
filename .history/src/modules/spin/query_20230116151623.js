
const GETSPIN = `
select * from spin
`

const POSTSPIN = `
insert into spin(name_uz,name_en,text_uz,text_en,responsible)
values($1,$2,$3,$4,$5) returning *
`

const PUTSPIN = `
update spin set 
name_uz = $1,
name_en = $2,
text_uz = $3,
text_en = $4,
responsible = $5
returning *
`

const DELETESPIN = `
delete from spin where spin_id = $1 returning *
`

module.exports = {
GETSPIN,
POSTSPIN,
PUTSPIN,
DELETESPIN
}
