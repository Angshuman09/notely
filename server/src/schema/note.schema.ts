import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '' 
  },
  content: {
    type: String,
    default: ''
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  folder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Folder',
    default: null 
  },
  isPinned: {
    type: Boolean,
    default: false 
  },
  isLocked: {
    type: Boolean,
    default: false 
  },
  isTrashed: {
    type: Boolean,
    default: false 
  },
  trashedAt: {
    type: Date,
    default: null 
  },
  color: {
    type: String,
    default: null 
  },
  tags: [{
    type: String 
  }],
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  },
  sharedWith: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    permission: {
      type: String,
      enum: ['view', 'edit'],
      default: 'view'
    }
  }], 
  attachments: [{
    filename: String,
    fileUrl: String,
    fileType: String,
    fileSize: Number
  }], 
}, {
  timestamps: true 
});

noteSchema.index({ user: 1, createdAt: -1 });
noteSchema.index({ user: 1, isTrashed: 1 });
noteSchema.index({ user: 1, folder: 1 });

export const Note = mongoose.model('Note', noteSchema);