
const GETSPIN = `
select * from spin
`

const POSTSPIN = `
insert into spin(name_en,text_uz,text_en,responsible)
values($1,$2,$3,$4,$5) returning *
`

const PUTSPIN = `
update spin set 
name_en = $1,
text_uz = $2,
text_en = $3,
responsible = $4
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
