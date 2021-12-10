/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useRef, useState } from 'react';
import { AlertDialog, Button, Center } from 'native-base';
import { ModalBody } from '..';
import { Props } from '../../types';

const Component: FC<Props> = ({ routeModel }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = useRef(null);

  return (
    <>
      <Button top={200} zIndex={1000} position="absolute" colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Dados da trilha
      </Button>
      <Center>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.Header>Dados da trilha</AlertDialog.Header>
            <AlertDialog.CloseButton />
            <AlertDialog.Body>
              <ModalBody routeModel={routeModel} />
            </AlertDialog.Body>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
    </>
  );
};

export default Component;
