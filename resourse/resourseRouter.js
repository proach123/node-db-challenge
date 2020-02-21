const express = require('express');

const Resourse = require('./resourse-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resourse.findResourses()
    .then(resourses => {
      res.json(resourses);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resourses' });
    });
  });

  router.post('/', (req, res) => {
    const resourseData = req.body;
  
    Resourse.addResourses(resourseData)
    .then(resourse => {
      res.status(201).json(resourse);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resourse' });
    });
  });

//   - [x] adding resources.
//   - [x] retrieving a list of resources.






module.exports = router