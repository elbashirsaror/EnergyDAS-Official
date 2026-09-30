import { useState } from 'react';
import { Search, Phone, Mail, User, LogIn, Globe, Shield, X, ArrowRight } from 'lucide-react';
import { PRODUCT_CATALOG, ProductCodeItem } from '../data/energyDasData';

interface TopBarProps {
  onOpenPortalModal: () => void;
  onOpenContactModal: () => void;
  onSelectProduct: (product: ProductCodeItem) => void;
}

export function TopBar({ onOpenPortalModal, onOpenContactModal, onSelectProduct }: TopBarProps) {
 
}
