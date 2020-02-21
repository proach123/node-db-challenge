const express = require('express');

const Project = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Project.findProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Project.findProjectsById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  router.post('/', (req, res) => {
    const projectData = req.body;
  
    Project.addProject(projectData)
    .then(resourse => {
      res.status(201).json(resourse);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resourse' });
    });
  });
//   - [x] adding projects.
//   - [x] retrieving a list of projects.




router.get("/:id/tasks", (req, res) => {
    /*
      select p.contents, u.username as saidBy
      from posts as p
      join users as u on p.user_id = u.id
    */
   const {id} = req.params
  console.log(id)
    Project.findTask(id)
      .then(task => {
        res.status(200).json(task);
      })
      .catch(error => {
        console.log("error", error);
  
        res.status(500).json({ oops: "I did it again" });
      });
  });




router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params; 
  
    Project.findProjectsById(id)
    .then(project => {
      if (project) {
        Project.addTask(taskData, id)
        .then(step => {
          res.status(201).json(step);
        })
      } else {
        res.status(404).json({ message: 'Could not find task with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

// - [ ] Build an API with endpoints for:


//   - [ ] adding tasks.
//   - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.




module.exports = router