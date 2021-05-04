import React from 'react'
import bg from '../../images/bg.jpg'
import emailjs from 'emailjs-com';
import {
  Container,
  FormLabel,
  FormWrap,
  Icon,
  FormH1,
  FormInput,
  Form,
  FormButton,
  FormLabelCol,
  Options,
  Packages,
  PackagesSection,
  Text,
  Option,
  Select,
  TextArea,
  GAWrap,
  BgImage,
} from "./SignInElements";

const SignIn = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6myakbn', 'template_fkxy5s2', e.target, 'user_C0ZMJkaP7FjW17Xv6LphE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    return (
      <>
        <Container>
          <BgImage src={bg} />
          <FormWrap>
            <Icon to='/'>Smart Muscle Gym</Icon>
            <Form onSubmit={sendEmail}>
              <FormH1>Personal Details</FormH1>
              <FormLabel htmlFor="FName" >First Name</FormLabel>
              <FormInput type="text" name='FName' required />
              <FormLabel htmlFor="LName" >Last Name</FormLabel>
              <FormInput type="text" name='LName' />
              <FormLabel htmlFor="Email">Email</FormLabel>
              <FormInput type="email"  name="Email" required />

              <GAWrap>
                <Options>
                  <FormLabel htmlFor="gender" required>
                    Gender
                  </FormLabel>
                  <Select name="Gender">
                    
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="others">Others</Option>
                  </Select>
                </Options>

                <Options>
                  <FormLabel htmlFor="Age">Age</FormLabel>
                  <FormInput type="number" min="10" max="100" name='Age' required />
                </Options>
              </GAWrap>

              <FormLabel htmlFor="MedicalConditions">
                Medical Conditions
              </FormLabel>
              <TextArea name='MedicalCondition'/>

              <FormH1>Packages</FormH1>
              <Packages>
                <PackagesSection>
                  <FormLabel htmlFor="Membership">Membership</FormLabel>
                  <FormLabelCol>
                    <Options>
                      <FormInput
                        type="radio"
                        value="Monthly"
                        name="Monthly"
                      />
                      <FormLabel>Monthly</FormLabel>
                    </Options>
                    <Options>
                      <FormInput
                        type="radio"
                        value="HalfYearly"
                        name="HalfYearly"
                      />
                      <FormLabel>Half Yearly</FormLabel>
                    </Options>
                    <Options>
                      <FormInput
                        type="radio"
                        value="Yearly"
                        name="Yearly"
                      />
                      <FormLabel>Yearly</FormLabel>
                    </Options>
                  </FormLabelCol>
                </PackagesSection>
                <PackagesSection>
                  <FormLabel htmlFor="Trainer">Personal Trainer</FormLabel>
                  <FormLabelCol>
                    <Options>
                      <FormInput type="checkbox" value="CrossFit"  name="CrossFit" />
                      <FormLabel>Yoga</FormLabel>
                    </Options>
                    <Options>
                      <FormInput type="checkbox" value="Yoga" name="Yoga" />
                      <FormLabel>Crossfit</FormLabel>
                    </Options>
                    <Options>
                      <FormInput type="checkbox" value="Calasthanics" name="Calasthanics" />
                      <FormLabel>Calesthenics</FormLabel>
                    </Options>
                  </FormLabelCol>
                </PackagesSection>
              </Packages>

              <FormButton type="submit" value='send'>Submit</FormButton>
            </Form>
          </FormWrap>
        </Container>
      </>
    );
}

export default SignIn