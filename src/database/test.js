const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
  proffyValue = {
    name: 'Felipe Sette',
    avatar: 'https://avatars1.githubusercontent.com/u/67072271?s=460&u=f6220ee325566690c6e451812b96a520efa6bb02&v=4',
    whatsapp: '11951707123',
    bio: 'Instrutor de Educação Física'
  }

  classValue = {
    subject: 1,
    cost: 20
  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

 // await createProffy(db, {proffyValue, classValue, classScheduleValues})

 const selectedProffys = await db.all("SELECT * FROM proffys")
// console.log (selectedProffys)


 const selectClassesAndProffys = await db.all(`
    SELECT classes.*,proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
 `)
 // console.log (selectClassesAndProffys)

 const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
 `)

 // console.log(selectClassesSchedules)

})