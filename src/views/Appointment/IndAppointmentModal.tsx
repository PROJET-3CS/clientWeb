import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, FC, useState } from 'react'
import { Button, Modal, ModalBody, FormGroup, Label, Row, Input } from 'reactstrap'
import DoctorBox from '../../components/AppointmentComponents/DoctorBox'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import SecondaryInput from '../../components/PrimaryInput/SecondaryInput'

const IndAppointmentModal: FC = (props: ComponentProps<typeof Input>['props']) => {
 const { buttonLabel } = props

 const [modal, setModal] = useState(false)

 const toggle = () => {
  setModal(!modal)
 }

 return (
  <div>
   <Button color="danger" onClick={toggle}>
    {buttonLabel}
   </Button>
   <Modal
    isOpen={modal}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    toggle={toggle}
    className="newappointment__resultmodal"
   >
    <ModalBody className="newappointment__resultmodal-body">
     <div className="newappointment__resultmodal-header">
      <p>Create Individual Appointment</p>
      <FontAwesomeIcon onClick={toggle} icon="window-close" color="primary-color" />
     </div>
     <div>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Select Patient</Label>
       <SecondaryInput name="name" placeholder="Yacine Kharroubi" type="text" label="Name" />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Assigned to</Label>
       <Row>
        <DoctorBox name="Dr Amirouche" speciality="Generaliste" image="/img/doctor1.png" />
        <DoctorBox name="Dr Amirouche" speciality="Generaliste" image="/img/doctor2.png" />
        <DoctorBox name="Dr Amirouche" speciality="Generaliste" image="/img/doctor3.png" />
        <DoctorBox name="Dr Amirouche" speciality="Generaliste" image="/img/doctor4.png" />
       </Row>
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Select Date</Label>
       <SecondaryInput name="finish" placeholder="Yacine Kharroubi" type="date" label="In" />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Select Time</Label>
       <Row md="2">
        <div>
         <SecondaryInput name="start" placeholder="Yacine Kharroubi" type="time" label="From" />
        </div>
        <div>
         <SecondaryInput name="finish" placeholder="Yacine Kharroubi" type="time" label="To" />
        </div>
       </Row>
      </FormGroup>
      <AwesomeButton>Create Appointment</AwesomeButton>
     </div>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default IndAppointmentModal