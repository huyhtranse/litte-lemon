import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import { useForm } from "../context/formContext";
import Button from "./Button";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const regex = new RegExp('/^[0-3][0-9]/[0-3][0-9]/(?:[0-9][0-9])?[0-9][0-9]$/');

const BookingForm = () => {
  const { availableTimes } = useForm();
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]); 

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '00:00',
      numberGuests: 1,
      occasion: 'Birthday'
    },
    onSubmit: (values) => {  
      console.log('submitted')
      submit('https://john.com/contactme', values);
    },
    // validationSchema: Yup.object({
    //   date: Yup.string().matches(regex).required("Required"), 
    //   time: Yup.string().required("Required"),
    //   numberGuests: Yup.number().required("Required").positive().integer(),
    //   occasion: Yup.string().matches(/(Birthday|Anniversary)/).required('Required')
    // })
  });

  return (
    <form className="grid max-w-[200px] gap-[10px]" onSubmit={formik.handleSubmit}>
      <label htmlFor="res-date" className="font-semibold">
        Choose date
      </label>
      <input
        className={`rounded-lg border-solid border-2 p-1.5 border-green ${!!formik.errors.date && formik.touched.date ? 'border-red' : ''}`}
        type="date"
        id="res-date"
        {...formik.getFieldProps('date')}
      />

      <label htmlFor="res-time" className="font-semibold">
        Choose time
      </label>
      <select
        className="rounded-lg border-solid border-2 border-green p-1.5"
        id="res-time"
        {...formik.getFieldProps('time')}
      >
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests" className="font-semibold">
        Number of guests
      </label>
      <input
        className="rounded-lg border-solid border-2 border-green p-1.5"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        {...formik.getFieldProps('numberGuests')}
      />

      <label htmlFor="occasion" className="font-semibold">
        Occasion
      </label>
      <select
        className="rounded-lg border-solid border-2 border-green bg-green text-white p-1.5"
        id="occasion"
        {...formik.getFieldProps('occasion')}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <div className="mt-5 border-t-2 pt-6">
        <Button styles="w-[200px]" typeButton='submit'>
          Make a Reservations
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
