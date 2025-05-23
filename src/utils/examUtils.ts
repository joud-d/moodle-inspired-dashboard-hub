
export const getStatusColor = (status: string) => {
  switch (status) {
    case 'upcoming':
      return 'bg-red-100 text-red-800';
    case 'scheduled':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case 'Final':
      return 'bg-red-500';
    case 'Midterm':
      return 'bg-orange-500';
    case 'Quiz':
      return 'bg-blue-500';
    case 'Test':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getDaysUntil = (dateString: string) => {
  const examDate = new Date(dateString);
  const today = new Date();
  const diffTime = examDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
