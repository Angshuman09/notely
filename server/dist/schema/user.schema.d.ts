import mongoose from 'mongoose';
export declare const User: mongoose.Model<{
    email: string;
    password: string;
    verifyOtp: string;
    expireOtp: number;
    resetOtp: string;
    expireResetOtp: number;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    verifyOtp: string;
    expireOtp: number;
    resetOtp: string;
    expireResetOtp: number;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    email: string;
    password: string;
    verifyOtp: string;
    expireOtp: number;
    resetOtp: string;
    expireResetOtp: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    email: string;
    password: string;
    verifyOtp: string;
    expireOtp: number;
    resetOtp: string;
    expireResetOtp: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    verifyOtp: string;
    expireOtp: number;
    resetOtp: string;
    expireResetOtp: number;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    email: string;
    password: string;
    verifyOtp: string;
    expireOtp: number;
    resetOtp: string;
    expireResetOtp: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        email: string;
        password: string;
        verifyOtp: string;
        expireOtp: number;
        resetOtp: string;
        expireResetOtp: number;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        email: string;
        password: string;
        verifyOtp: string;
        expireOtp: number;
        resetOtp: string;
        expireResetOtp: number;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    email: string;
    password: string;
    verifyOtp: string;
    expireOtp: number;
    resetOtp: string;
    expireResetOtp: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    password: string;
    verifyOtp: string;
    expireOtp: number;
    resetOtp: string;
    expireResetOtp: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.schema.d.ts.map