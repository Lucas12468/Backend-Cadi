import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Cadi Golf Backend is running! 🏌️',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working!',
    version: '1.0.0'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Cadi Backend running on port ${PORT}`);
});
```

**Click "Commit new file"**

---

## 📝 FILE 3: .npmrc

**Click "Add file" → "Create new file"**

**Name:** `.npmrc`

**Content:**
```
legacy-peer-deps=true
