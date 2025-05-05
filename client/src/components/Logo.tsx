import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-1.5 group">
      <div className="bg-gradient-to-br from-fit-green-500 to-fit-green-600 p-1.5 rounded-lg shadow-sm group-hover:shadow transition-all duration-200">
        <Dumbbell size={16} className="text-white" />
      </div>
      <span className="text-xl font-bold tracking-tight">
        <span className="text-fit-green-600">Fit</span>
        <span className="text-fit-green-700">Target</span>
        <span className="text-fit-lime-600">Hub</span>
      </span>
    </Link>
  );
};

export default Logo;
