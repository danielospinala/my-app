import { NextResponse } from "next/server"; 

const posts = [
    {
      id: 1,
      name: 'Daniel',
      lastName: 'Ospina',
      age: 39,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
    },
    {
      id: 2,
      name: 'John',
      lastName: 'Doe',
      age: 25,
      description: 'A software engineer with a passion for coding.'
    },
    {
      id: 3,
      name: 'Emily',
      lastName: 'Smith',
      age: 30,
      description: 'An artist who loves painting landscapes.'
    },
    {
      id: 4,
      name: 'David',
      lastName: 'Johnson',
      age: 42,
      description: 'A teacher dedicated to shaping young minds.'
    },
    {
      id: 5,
      name: 'Sophia',
      lastName: 'Williams',
      age: 19,
      description: 'A student pursuing a degree in computer science.'
    },
    {
      id: 6,
      name: 'Michael',
      lastName: 'Brown',
      age: 35,
      description: 'A chef who creates culinary masterpieces.'
    },
    {
      id: 7,
      name: 'Olivia',
      lastName: 'Davis',
      age: 28,
      description: 'A journalist with a knack for storytelling.'
    },
    {
      id: 8,
      name: 'Daniel',
      lastName: 'Wilson',
      age: 50,
      description: 'A businessman who leads with integrity.'
    },
    {
      id: 9,
      name: 'Ava',
      lastName: 'Taylor',
      age: 37,
      description: 'An athlete who enjoys running marathons.'
    },
    {
      id: 10,
      name: 'James',
      lastName: 'Anderson',
      age: 32,
      description: 'A musician who plays multiple instruments.'
    },
    {
      id: 11,
      name: 'Mia',
      lastName: 'Thomas',
      age: 22,
      description: 'A photographer capturing beautiful moments.'
    }
  ];

  // export function GET(){
  //   return NextResponse.json(posts);
  // }
  export function GET(){
    return new Response(JSON.stringify(posts));
  }
  