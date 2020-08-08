import * as express from "express";
import * as InstanceService from '../services/InstanceService'
import * as PersonService from '../services/PersonService'
let router = express.Router();

router.get('/:identifier', function(req, res){
    let identifier = req.params.identifier;
    return InstanceService.getInstanceByIdentifier(identifier).then(instance=>{
        console.log('instance', instance)
        return PersonService.GetPersonById(instance.personId).then(person=>{
            console.log('person', person)

            const instanceObj = instance.toObject()
            const personObj = person.toObject()
            return res.send({...instanceObj, ...personObj})
        })
    })

})

router.post('/save', function(req, res){
    return InstanceService.saveInstance(req.body).then(instance=>{
        return res.send(instance)
    })

})

export default router