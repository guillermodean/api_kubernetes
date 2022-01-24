const express = require ( 'express');
const router = express.Router(); //devuelve un objeto en la constate router
var ObjectId = require('mongodb').ObjectID;

const Kubernetes = require('../models/kubernetes')

router.get('/', (req,res)=>{
res.json('hola mangutas');

})

//getall
router.get('/kubernetes', async (req, res) => {
    const all = await Kubernetes.find()
    res.status(200).json(all);
})

//post
router.post('/kubernetes', async (req, res) => { 
    const { _id, name, description, date } = req.body;
    const newKubernete = new Kubernetes({ _id, name, description, date })
    await newKubernete.save();
    res.status(200).json({ newKubernete })
})

//getone
router.get('/kubernetes/:id', async (req, res) => {
    const id = req.params.id
    const oneKubernete = await Kubernetes.findById(id).exec()
    console.log(oneKubernete)
    res.status(200).json(oneKubernete);
})

//putone

router.put('/kubernetes/:id', async (req, res) => {
    const {id} = req.params.id
    const data=req.body
    console.log(data);
    await Kubernetes.findByIdAndUpdate(id,data).exec()
    
    res.status(200).json('actualizado');
})

//deleteone

router.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Kubernetes.findByIdAndDelete(id)
            .then(() => { 
                res.status(200);
                console.log('borrado')
                 });
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
