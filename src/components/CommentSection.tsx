import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';


interface Comment {
  id: string;
  content: string;
  author: string;
}

interface CommentSectionProps {
  postId: string;
}

export function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  React.useEffect(() => {
    console.log(`Comments for post ${postId}`);
  }, [postId]);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObject: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        content: newComment,
      };

      setComments([...comments, newCommentObject]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.content);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, content: newComment, author: authorName }
          : comment
      );

      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };

  return (
    <motion.div
      className='mt-8 font-family bg-[#1A1A1D] p-8 rounded-lg'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-3xl md:text-5xl font-bold text-[#FAB12F] text-center'>Comments</h2>

      <motion.div
        className='mt-6 space-y-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {comments.length > 0 ? (
          comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className='bg-[#3B1C32] shadow-md'>
                <CardContent className='p-10'>
                  <div className='text-[#FAB12F] font-semibold'>{comment.author}</div>
                  <p className='text-white mt-2'>{comment.content}</p>
                  <motion.button
                    onClick={() => handleEditComment(comment.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='mt-4 text-white border-[#FAB12F] border-2 py-1 px-4 rounded-lg'
                  >
                    Edit
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <motion.p
            className='text-white text-center text-2xl '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No comments yet
          </motion.p>
        )}
      </motion.div>

      <div className='mt-8'>
        <Input
          type='text'
          placeholder='Your Name'
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className='bg-[#3B1C32] w-full text-white border-[#FAB12F] border-2 mb-4 p-6 rounded-lg'
        />

        <Input
          type='text'
          placeholder='Add your comment'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='bg-[#3B1C32] w-full text-white border-[#FAB12F] border-2 mb-4 p-6 rounded-lg'
        />

        <motion.button
          onClick={editingCommentId ? handleSaveComment : handleAddComment}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='w-full text-white bg-[#6A1E55] hover:bg-[#FAB12F]/80 transition duration-300 py-3 rounded-lg'
        >
          {editingCommentId ? 'Save Comment' : 'Submit'}
        </motion.button>
      </div>
    </motion.div>
  );
}
