import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

const NotesCard = (props) => {
  return (
    <div>
      <Card className="max-w-[400px] m-5">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="/pdf-icon.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{props.notes}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody className='w-80'>
        <Button className='w-3/5 my-3 mx-auto  text-center rounded-xl hover:bg-blue-600'>PDF Summary</Button>
        <Button className='w-3/5 my-3 mx-auto text-center rounded-xl hover:bg-blue-600'>Flash Cards</Button>
        <Button className='w-3/5 my-3 mx-auto text-center rounded-xl hover:bg-blue-600'>Quizes</Button>

      </CardBody>

      
    </Card>
    </div>
  )
}

export default NotesCard
