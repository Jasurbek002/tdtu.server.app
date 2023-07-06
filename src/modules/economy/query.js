const GETDATA = `
select * from economy
`;

const POSTDATA = `
insert into economy(name_uz,name_en,department)
values($1,$2,$3) returning *
`;

const OLDDATA = `
select * from economy
where econom_id = $1
`;

const PUTDATA = `
updated economy set
 name_uz = $1,
 name_en = $2,
 department = $3,
 where economy_id = $3 returning * 
`;

const DELETEDATA = `
delete from economy where economy_id = $1
`;

module.exports = {
  GETDATA,
  POSTDATA,
  OLDDATA,
  PUTDATA,
  DELETEDATA,
};
