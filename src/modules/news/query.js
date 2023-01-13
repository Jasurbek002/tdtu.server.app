const GETDATA = `
select * from news
`

const POSTDATA = `
insent into news(image,title_uz,titl_en,text_uz,text_en)
values($1,$2,$3,$4,$5) returning *
`
const PUTDATA = `

`
const DELETEDATA = `

`


module.exports = {
    GETDATA,
    POSTDATA,
    PUTDATA,
    DELETEDATA
}