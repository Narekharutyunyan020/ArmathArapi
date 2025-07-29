import React from 'react';
import {
  FaCode,
  FaMicrochip,
  FaCube,
  FaPrint,
  FaPaintBrush,
  FaRobot,
  FaTools,
} from 'react-icons/fa';
import s from './Fileds.module.scss';

const fields = [
  {
    icon: <FaCode />,
    title: 'Programming Basics',
    details: (
      <>
        <strong>Visual Programming</strong><br />
        Beginner: Aghves, Scratch<br />
        Next: MIT App Inventor, Blockly, Snap<br /><br />
        <strong>Text-Based Programming</strong><br />
        Beginner: Kturtle (Kria)<br />
        Next: C, C++, Python, Bash, JavaScript
      </>
    ),
  },
  {
    icon: <FaMicrochip />,
    title: 'Electronics & Embedded Systems',
    details: (
      <>
        <strong>Electronics Basics</strong><br />
        Beginner: Arduino, Raspberry Pi<br />
        Next: ESP, STM32
      </>
    ),
  },
  {
    icon: <FaCube />,
    title: '3D Modeling',
    details: (
      <>
        Beginner: FreeCAD<br />
        Advanced: Blender
      </>
    ),
  },
  {
    icon: <FaPrint />,
    title: '3D Printing',
    details: (
      <>
        Slic3r, Printrun
      </>
    ),
  },
  {
    icon: <FaPaintBrush />,
    title: 'Vector Graphics',
    details: (
      <>
        Inkscape
      </>
    ),
  },
  {
    icon: <FaTools />,
    title: 'CNC / Laser Engraving Tools',
    details: (
      <>
        HeeksCAD, bCNC
      </>
    ),
  },
  {
    icon: <FaRobot />,
    title: 'Robotics',
    details: (
      <>
        Beginner: SERob Kit<br />
        Advanced: Custom-built robots
      </>
    ),
  },
  {
    icon: <FaTools />,
    title: 'Other Tools & Areas',
    details: (
      <>
        “We remain open to new tools and directions beyond the ones listed above.”
      </>
    ),
  },
];

const FieldsOfStudy = () => {
  return (
    <section className={s['fields-container']}>
  <h2>Fields of Study</h2>
  <div className={s.grid}>
    {fields.map((field, index) => (
      <div key={index} className={s['field-card']}>
        <div className={s.icon}>{field.icon}</div>
        <h3>{s.title}{field.title}</h3> 
        <div className={s.details}>{field.details}</div>
      </div>
    ))}
  </div>
</section>
  );
};

export default FieldsOfStudy;
