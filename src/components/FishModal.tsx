import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import type { Product } from './types';

interface FishModalProps {
  fish: Product;     // Pass a whole product object as 'fish'
  show: boolean;
  onHide: () => void;
}

const FishModal: React.FC<FishModalProps> = ({ fish, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} dialogClassName="modal-lg" centered>
      <Modal.Header closeButton style={{ backgroundColor: '#3A3A3A' }}>
        <Modal.Title style={{ color: 'white' }}>{fish.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img src={fish.image} alt={fish.name || 'Fish image'} style={{ width: '100%', marginBottom: '1rem' }} />
        <p
          style={{
            textAlign: 'justify',
            border: '1px solid #3A3A3A',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          {fish.description}
        </p>
      </Modal.Body>

      <Modal.Footer style={{ borderTop: 0 }}>
        <Button variant="success" style={{ fontWeight: 'bold' }}>
          {typeof fish.price === 'number' ? `$${fish.price.toFixed(2)}` : fish.price}
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FishModal;
