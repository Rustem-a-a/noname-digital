import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import styles from './Own.module.scss'
import axios from "axios";

const UserPage = () => {
      const {
        register,
        formState:
            {
                errors,
                isValid
            },
        handleSubmit,
        reset
    } = useForm({mode: 'onBlur'})

    const onSubmit = (data) => {
        if (prompt('Корректно указаны данные?' + JSON.stringify(data))) {
            reset()
        }
    }
    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.labelUserPageSurname}>Фамилия {errors.surname &&
                    <p style={{color: 'red'}}>{errors.surname.message || 'Error'}</p>}</label>
                <input className={styles.userPageSurname} type='text' placeholder='Фамилия...'
                       {...register('surname', {
                           required: 'Вы не ввели фамилию'
                       })}/>

                <label className={styles.labelUserPageName}>Имя {errors.name &&
                    <p style={{color: 'red'}}>{errors.name.message || 'Error'}</p>}</label>
                <input className={styles.userPageName} type='text' placeholder='Имя...'
                       {...register('name', {required: 'Вы не ввели имя'})}
                />
                <label className={styles.labelUserPagePatronymic}>Отчество{errors.patronymic &&
                    <p style={{color: 'red'}}>{errors.patronymic.message || 'Error'}</p>}</label>
                <input className={styles.userPagePatronymic} type='text' placeholder='Отчество...'
                       {...register('patronymic', {
                           required: 'Вы не ввели отчество'
                       })}
                />
                <label className={styles.labelUserPageBirthday}>День рождения{errors.date &&
                    <p style={{color: 'red'}}>{errors.date.message || 'Error'}</p>}</label>
                <input className={styles.userPageBirthday} type='date' placeholder='День рождения...'
                       {...register('date', {
                           required: 'Вы не выбрали дату'
                       })}
                />
                <label className={styles.labelUserPageEmail}>Электронная почта{errors.email &&
                    <p style={{color: 'red'}}>{errors.email.message || 'Error'}</p>}</label>
                <input className={styles.userPageEmail} type='email' placeholder='Электронная почта...'
                       {...register('email', {
                           required: 'Вы не ввели электронную почту',
                           pattern: {
                               value: /\S+@\S+\.\S+/,
                               message: "Введите email"
                           }
                       })}
                />
                <label className={styles.labelUserPagePhone}>Телефон{errors.tel &&
                    <p style={{color: 'red'}}>{errors.tel.message || 'Error'}</p>}</label>
                <input className={styles.userPagePhone} type='tel' placeholder='Телефон...'
                       {...register('tel', {
                           required: 'Вы не ввели номер телефона'
                       })}
                />
                <label className={styles.labelUserPageComments}>Комментарии</label>
                <textarea className={styles.userPageComments} placeholder='Комментарии...'
                          {...register('comments')}
                />
                <button type='submit' className={styles.userPageBtn}>Изменить</button>
            </form>
        </div>
    );
};

export default UserPage;